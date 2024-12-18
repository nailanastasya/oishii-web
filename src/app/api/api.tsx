import axios from 'axios';
import { load } from 'cheerio'; // Menggunakan named import untuk cheerio

type MenuItem = {
  name: string;
  image_url: string;
  status: string;
  difficulty: string;
};

export const fetchMenuItems = async (): Promise<MenuItem[]> => {
  try {
    const { data } = await axios.get(
      'https://tech-class.datacore.machinevision.global/admin/content/Menu_Oishii'
    );

    const $ = load(data); // Menggunakan load dari cheerio untuk parsing HTML
    const menuItems: MenuItem[] = [];

    // Misalkan selector untuk nama, gambar, status, dan tingkat kesulitan
    $('.menu-item').each((_, element) => {
      const name = $(element).find('.menu-name').text();
      const image_url = $(element).find('img').attr('src') || '';
      const status = $(element).find('.menu-status').text();
      const difficulty = $(element).find('.menu-difficulty').text();

      menuItems.push({ name, image_url, status, difficulty });
    });

    return menuItems;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    throw new Error('Failed to fetch menu items');
  }
};
