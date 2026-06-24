# AGENTS.md

<!-- MCP START -->

- 关于 tdesign 组件库的问题，使用tdesign-mcp-server的MCP查询。
- 重要！禁止修改components/ui中的组件
- tdesign的使用流程如下：
  - 查询MCP是否有合适的组件
  - 查询MCP是否有合适的组件文档
  - 导入和使用组件
- 尽量使用tdesign提供的组件，避免自己编写组件样式。
<!-- MCP END -->

<!-- CSS START -->

- 只有在tdesign没有合适组件时，才自行编写css。
- 关于tailwindcss的使用，使用skills查询。
- 在整个项目中，尽量少编写css代码，更多使用tailwindcss的类名。
- 关于tailwindcss的类名，使用skills查询。
<!-- CSS END -->

<!-- AUTO-IMPORTS START -->

- 无需import关于Vue、Vue Router、pinia、tdesign的函数。
- 已经使用了自动导入，自动导入的函数位于auto-imports.d.ts文件中。
<!-- AUTO-IMPORTS END -->
