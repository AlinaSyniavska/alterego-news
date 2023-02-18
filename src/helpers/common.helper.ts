const commonHelper = {
    moveToPageTop: (): void => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    },
    getFormatDate: (date: Date): string => {
        const initDate = new Date(date);
        return initDate.toDateString().slice(4);
    },
    substringText(string: string, max: number): string {
        return string.length > max ?
            `${string.substring(0, max)}...` : string
    },
    getSkippedNews(count: number): string {
        return (10 * count).toString();
    },

}

export {
    commonHelper
}

