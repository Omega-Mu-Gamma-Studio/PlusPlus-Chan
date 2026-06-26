/**
 * CppHighlighter.js
 *
 * Zero-dependency C++ tokenizer.
 * Returns an HTML string with <span class="token-*"> wrappers.
 * Used by CodeBlock.jsx.
 *
 * Token classes:
 *   token-keyword      → blue   (auto, class, constexpr, using, etc.)
 *   token-type         → teal   (int, float, double, bool, std::string, etc.)
 *   token-string       → green  (quoted strings)
 *   token-comment      → gray   (//, /* ... * /)
 *   token-number       → orange
 *   token-method       → pink   (identifier followed by '(')
 *   token-annotation   → purple (preprocessor directives: #include, #define)
 *   token-class-name   → yellow (after 'class', 'struct', 'enum')
 *   token-preprocessor → purple (#include, #define, #ifdef)
 */

const KEYWORDS = new Set([
  // C++98 / C++03
  'asm', 'auto', 'break', 'case', 'catch', 'class', 'const', 'continue',
  'default', 'delete', 'do', 'else', 'enum', 'explicit', 'export',
  'extern', 'for', 'friend', 'goto', 'if', 'inline', 'mutable',
  'namespace', 'new', 'operator', 'private', 'protected', 'public',
  'register', 'return', 'sizeof', 'static', 'struct', 'switch',
  'template', 'this', 'throw', 'try', 'typedef', 'typeid',
  'typename', 'union', 'using', 'virtual', 'volatile', 'while',

  // C++11
  'alignas', 'alignof', 'char16_t', 'char32_t', 'constexpr',
  'decltype', 'noexcept', 'nullptr', 'override', 'static_assert',
  'thread_local', 'final',

  // C++17
  'co_await', 'co_return', 'co_yield', 'fallthrough', 'nodiscard',

  // C++20
  'char8_t', 'concept', 'requires', 'consteval', 'constinit',

  // Common non-reserved but often highlighted
  'export', 'import', 'module',
]);

const TYPES = new Set([
  // Primitives
  'int', 'long', 'short', 'char', 'signed', 'unsigned',
  'float', 'double', 'bool', 'void',

  // Fixed width (C++11)
  'int8_t', 'int16_t', 'int32_t', 'int64_t',
  'uint8_t', 'uint16_t', 'uint32_t', 'uint64_t',
  'size_t', 'ptrdiff_t', 'nullptr_t',

  // STL containers
  'std::string', 'std::vector', 'std::array', 'std::list',
  'std::deque', 'std::forward_list', 'std::map', 'std::multimap',
  'std::unordered_map', 'std::unordered_multimap',
  'std::set', 'std::multiset', 'std::unordered_set',
  'std::unordered_multiset', 'std::queue', 'std::priority_queue',
  'std::stack', 'std::pair', 'std::tuple', 'std::optional',
  'std::variant', 'std::any', 'std::string_view',

  // Smart pointers
  'std::unique_ptr', 'std::shared_ptr', 'std::weak_ptr',

  // STL algorithms (types returned)
  'std::iterator_traits', 'std::allocator',
  'std::initializer_list', 'std::function',
]);

// Helper to check if a word is followed by '(' (method call)
function isFollowedByParen(line, endPos) {
  let j = endPos;
  while (j < line.length && line[j] === ' ') j++;
  return line[j] === '(';
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function tokenize(line) {
  const trimmed = line.trimStart();

  // 1. Full-line comments
  if (trimmed.startsWith('//') || trimmed.startsWith('///')) {
    return `<span class="token-comment">${escapeHtml(line)}</span>`;
  }

  let result = '';
  let i = 0;
  const len = line.length;

  while (i < len) {
    // 2. Preprocessor directives (#include, #define, etc.)
    if (line[i] === '#') {
      let end = i + 1;
      while (end < len && /[a-zA-Z_]/.test(line[end])) end++;
      const directive = line.slice(i, end);
      const rest = line.slice(end);
      const escapedRest = escapeHtml(rest);
      result += `<span class="token-preprocessor">${escapeHtml(directive)}</span>${escapedRest}`;
      // We're done — preprocessor directive is the whole line
      return result;
    }

    // 3. Block comment start
    if (line[i] === '/' && line[i + 1] === '*') {
      let end = i + 2;
      while (end < len && !(line[end - 1] === '*' && line[end] === '/')) end++;
      end++; // include closing '/'
      result += `<span class="token-comment">${escapeHtml(line.slice(i, end))}</span>`;
      i = end;
      continue;
    }

    // 4. Single-line comment (mid-line)
    if (line[i] === '/' && line[i + 1] === '/') {
      result += `<span class="token-comment">${escapeHtml(line.slice(i))}</span>`;
      break;
    }

    // 5. Raw string literal (C++11) R"(...)"
    if (line[i] === 'R' && line[i + 1] === '"') {
      let end = i + 2;
      while (end < len && !(line[end] === '"' && line[end - 1] !== '\\')) end++;
      end++;
      result += `<span class="token-string">${escapeHtml(line.slice(i, end))}</span>`;
      i = end;
      continue;
    }

    // 6. String literal
    if (line[i] === '"') {
      let end = i + 1;
      while (end < len && !(line[end] === '"' && line[end - 1] !== '\\')) end++;
      end++;
      result += `<span class="token-string">${escapeHtml(line.slice(i, end))}</span>`;
      i = end;
      continue;
    }

    // 7. Character literal
    if (line[i] === "'") {
      let end = i + 1;
      while (end < len && !(line[end] === "'" && line[end - 1] !== '\\')) end++;
      end++;
      result += `<span class="token-string">${escapeHtml(line.slice(i, end))}</span>`;
      i = end;
      continue;
    }

    // 8. Number (supports hex, binary, octal, float suffixes)
    if (/[0-9]/.test(line[i]) && (i === 0 || !/\w/.test(line[i - 1]))) {
      let end = i;
      // Hex: 0x...
      if (line[i] === '0' && (line[i + 1] === 'x' || line[i + 1] === 'X')) {
        end = i + 2;
        while (end < len && /[0-9a-fA-F]/.test(line[end])) end++;
      }
      // Binary: 0b...
      else if (line[i] === '0' && (line[i + 1] === 'b' || line[i + 1] === 'B')) {
        end = i + 2;
        while (end < len && /[01]/.test(line[end])) end++;
      }
      // Octal: 0...
      else if (line[i] === '0' && /[0-7]/.test(line[i + 1])) {
        end = i + 1;
        while (end < len && /[0-7]/.test(line[end])) end++;
      }
      // Float / decimal
      else {
        end = i;
        while (end < len && /[0-9.]/.test(line[end])) end++;
        // Suffix: f, F, l, L, u, U
        if (end < len && /[fFlLuU]/.test(line[end])) end++;
      }
      result += `<span class="token-number">${escapeHtml(line.slice(i, end))}</span>`;
      i = end;
      continue;
    }

    // 9. Word (keyword / type / method / identifier)
    if (/[a-zA-Z_]/.test(line[i])) {
      let end = i;
      while (end < len && /\w/.test(line[end])) end++;

      const word = line.slice(i, end);
      const isMethod = isFollowedByParen(line, end);

      let cls = '';
      if (KEYWORDS.has(word))      cls = 'token-keyword';
      else if (TYPES.has(word))    cls = 'token-type';
      else if (isMethod)           cls = 'token-method';
      else if (/^[A-Z]/.test(word)) cls = 'token-class-name';

      result += cls
        ? `<span class="${cls}">${escapeHtml(word)}</span>`
        : escapeHtml(word);

      i = end;
      continue;
    }

    // 10. Everything else
    result += escapeHtml(line[i]);
    i++;
  }

  return result;
}