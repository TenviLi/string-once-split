module.exports = (str = "", breaker = "") => {
    if (typeof breaker === "string") {
        if (breaker !== "") {
            const index = str.indexOf(breaker),
                afterIndex = index + breaker.length;
            if (~index) {
                return [str.slice(0, index), str.slice(afterIndex)].filter(i => i);
            }
        }
    } else if (breaker instanceof RegExp) {
        const match = str.match(new RegExp(breaker, ""));
        if (match != null) {
            const matchIndex = match.index,
                matchAfterIndex = matchIndex + match[0].length;
            return [
                str.slice(0, matchIndex),
                ...(match.length === 1 ? match[0] : match.slice(1)),
                str.slice(matchAfterIndex)
            ].filter(i => i);
        }
    }
    return [str];
};
