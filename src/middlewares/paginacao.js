module.exports = (req, res, next) => {

    let { limit, offset } = req.query;

    offset = Number(offset);
    limit = Number(limit);

    !offset ? offset = 0 : null;

    !limit ? limit = 6 : null;

    req.query.offset = offset;
    req.query.limit = limit;

    return next();
}