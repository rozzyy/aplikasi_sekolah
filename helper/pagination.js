exports.paginate = function (model, per_page) {
    const pageCount = Math.ceil(model.length / per_page);
    let page = parseInt(per_page);
    if (!page) {
        page = 1;
    }
    if (page > pageCount) {
        page = pageCount;
    }

    return model.slice(page * per_page - per_page, page * per_page)
};
