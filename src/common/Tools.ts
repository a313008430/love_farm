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
}
