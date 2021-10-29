export default class Tools {
    /**
     * 解析字符
     * @param str 要解析的字符
     * @param format 做为参考的字符默认为,
     * @returns 解析好的字符列表
     */
    static parseString(str: string, format: string = ",") {
        return str.split(format);
    }

    /**
     * 秒转换成00:00:00
     * @param s 转换时间的秒
     * @returns 00:00:00
     */
    static formatSeconds = (s) => new Date(s * 1000).toISOString().substr(11, 8);
}