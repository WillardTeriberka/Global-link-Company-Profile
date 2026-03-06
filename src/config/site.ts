// Site configuration
export const SITE = {
  title: 'Global-link',
  description: 'Leading provider of optimized logistics and manufacturing solutions with state-of-the-art facilities and industry expertise.',
  url: 'https://yourdomain.com',
  author: 'Global-link',
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Capabilities', href: '/capabilities' },
  { name: 'Use Cases', href: '/use-cases' },
  { name: 'Facilities', href: '/facilities' },
  // { name: 'Request Quote', href: '/rfq' }, 
  { name: 'Documentation', href: '/documentation' },
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yourcompany',
  youtube: 'https://youtube.com/yourcompany',
  instagram: 'https://instagram.com/yourcompany',
  xiaohongshu: 'https://www.xiaohongshu.com/user/profile/yourcompany',
  wechat: 'https://weixin.qq.com/',
  telegram: 'https://t.me/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
  facebook: 'https://facebook.com/yourcompany',
} as const;

