export interface ColumnProps{
  id: number | string;
  title: string;
  avatar?: string;
  description: string;
  followCount: number;
  articleCount: number;
}
export interface PostProps {
  id: number | string;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number;
}
export const testData:ColumnProps[] = [
  {
    id: '1',
    title: '简七理财',
    avatar: 'https://pic1.zhimg.com/v2-4003180359c22768877b60193c064c79_xl.jpg',
    description: '理财更简单 人生更自由',
    followCount: 9691,
    articleCount: 518
  },
  {
    id: '2',
    title: '交易法门',
    avatar: 'https://pic4.zhimg.com/v2-e11f6dd8eeee14d452cf4129eaf7ce36_xl.jpg',
    description: '公众号：交易法门',
    followCount: 11664,
    articleCount: 357
  },
  {
    id: '3',
    title: 'Alter聊科技',
    avatar: 'https://pic2.zhimg.com/v2-609b850564f24f03d7d1bc159d11455a_xl.jpg',
    description: '通俗易懂，不是砖家！',
    followCount: 392,
    articleCount: 550
  },
  {
    id: '4',
    title: '在职研究生',
    avatar: 'https://pic4.zhimg.com/v2-c974454f8f054c67a0b938356b4142dc_xl.jpg',
    description: '十年树木 百年树人',
    followCount: 1578,
    articleCount: 584
  }
]

export const postData:PostProps[] = [
  {
    id: '1',
    title: '为什么鱼一死就漂在水面上，而仿生的潜艇炸了会沉没？',
    content: '的“亚洲展区”前，有一间独立的大展厅。 刚从古老的希腊、罗马文物中转而踏入此厅的观众，常常会被眼前的巨幅佛像壁画震撼得说不出话来，进而被引入属于亚洲文明的艺术天地。 这幅高达7.5米，…',
    image: 'https://pic1.zhimg.com/v2-5f0389e98d9ce4ef57610962b21bf9bb_400x224.jpg',
    createdAt: 'bobo',
    columnId: 1
  }
]