import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import monkey from "vite-plugin-monkey";

export default defineConfig({
    plugins: [
        svelte(),
        monkey({
            entry: "src/main.ts",
            userscript: {
                name: {
                    "": "LeetCode Toolkit",
                    "zh-CN": "LeetCode工具箱",
                },
                description: {
                    "": "Copy problem as Markdown, Download as Jupyter Notebook, Format on Save, Unlock Editorial & IntelliSense",
                    "zh-CN":
                        "复制题目为 Markdown | 下载为 Jupyter Notebook | 保存时自动格式化 | 免费自动补全",
                },
                author: "eclipher",
                namespace: "https://github.com/eclipher/leetcode-jupyter",
                homepage: "https://github.com/eclipher/leetcode-jupyter",
                match: [
                    "*://leetcode.com/problems/*",
                    "*://leetcode.cn/problems/*",
                ],
                // don't activate script on solution submission page
                exclude: [
                    "*://leetcode.com/problems/*/post-solution/*",
                    "*://leetcode.cn/problems/*/post-solution/*", // untested
                ],
                version: "2.1.0",
                license: "MIT",
                icon: "https://www.google.com/s2/favicons?sz=64&domain=leetcode.com",
                resource: {
                    editorials:
                        "https://raw.githubusercontent.com/akhilkammila/leetcode-screenshotter/refs/heads/main/ReadMe.md",
                },
            },
        }),
    ],
});
