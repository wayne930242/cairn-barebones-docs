// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightAutoSidebar from 'starlight-auto-sidebar';

// ============================================
// 遊戲文件設定
// ============================================
// TODO: 修改以下設定以符合您的遊戲

const SITE_CONFIG = {
	// 網站標題（顯示在導航列）
	title: '石冢：陽春版',
	// 預設語言
	defaultLocale: 'zh-TW',
	localeLabel: '繁體中文',
	// SEO：設為 true 允許搜尋引擎索引
	allowIndexing: false,
};

// ============================================
// Astro 設定（通常不需修改）
// ============================================

export default defineConfig({
	markdown: {
		smartypants: false,
	},
	integrations: [
		starlight({
			title: SITE_CONFIG.title,
			head: [
				// SEO 設定
				{
					tag: 'meta',
					attrs: {
						name: 'robots',
						content: SITE_CONFIG.allowIndexing ? 'index, follow' : 'noindex, nofollow',
					},
				},
			],
			defaultLocale: 'root',
			locales: {
				root: { label: SITE_CONFIG.localeLabel, lang: SITE_CONFIG.defaultLocale },
			},
			// ============================================
			// 側邊欄設定
			// TODO: 根據您的內容結構修改
			// ============================================
			sidebar: [
				{
					label: '總覽與原則',
					slug: 'overview-principles',
				},
				{
					label: '核心規則',
					autogenerate: { directory: 'core-rules' },
				},
				{
					label: '遊戲程序',
					autogenerate: { directory: 'procedures' },
				},
				{
					label: '角色創建',
					autogenerate: { directory: 'character-creation' },
				},
				{
					label: '裝備包',
					slug: 'gear-packages',
				},
				{
					label: '市集',
					slug: 'marketplace',
				},
				{
					label: '法術書',
					slug: 'spellbooks',
				}
			],
			plugins: [starlightAutoSidebar()],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
