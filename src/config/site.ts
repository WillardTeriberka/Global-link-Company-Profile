// Site configuration
export const SITE = {
  title: 'Global-link',
  description: 'Leading provider of optimized logistics and manufacturing solutions with state-of-the-art facilities and industry expertise.',
  url: 'https://yourdomain.com',
  author: 'Global-link',
} as const;

export const SERVICES = [
  { name: 'Sea Freight', href: '/services/sea-freight' },
  { name: 'Air Freight', href: '/services/air-freight' },
  { name: 'Warehousing', href: '/services/warehousing' },
  { name: 'Supply Chain Management', href: '/services/supply-chain-management' },
  { name: 'China Market Entry for Overseas Brands', href: '/services/china-market-entry-for-overseas-brands' },
] as const;

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Capabilities', href: '/capabilities' },
  // { name: 'Use Cases', href: '/use-cases' },
  { name: 'Competition advantage', href: '/competition-advantage' },
  { name: 'Our services', href: '/services' },
  // { name: 'Request Quote', href: '/rfq' }, 
  // { name: 'Documentation', href: '/documentation' },
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/na-na-5ba7141b9/',
  youtube: 'https://www.youtube.com/@Global-LinkAva',
  instagram: 'https://www.instagram.com/global_linklogistics/',
  xiaohongshu: 'https://www.xiaohongshu.com/user/profile/678e3ff3000000000e01f58a',
  wechat: 'https://weixin.qq.com/',
  telegram: 'https://t.me/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
  facebook: 'https://www.facebook.com/profile.php?id=61582642962316',
} as const;

