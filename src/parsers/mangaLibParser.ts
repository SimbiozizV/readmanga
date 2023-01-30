import * as cheerio from 'cheerio';
import { ParsedData } from '../types/ParsedData';

export default (html: string): ParsedData | null => {
    const $ = cheerio.load(html);

    try {
        let dataString = $('script')!.text().split('window')[1];
        dataString = dataString
            .replace('.__DATA__ = ', '')
            .replace(';', '')
            .replace(/\s{2,}/g, '')
            .replace(/;$/, '');
        const data = JSON.parse(dataString);

        if (data.manga.status === 4) return null; // Главы удалены по требованию правообладателя

        const chapter = data.chapters.list.shift();
        return {
            title: data.manga.rusName,
            lastChapter: chapter.chapter_number,
        };
    } catch (e) {
        return null;
    }
};
