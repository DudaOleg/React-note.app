const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const {noteRouter} = require("./routes");
const {code, errorMessage, ErrorHandler} = require("./errors");
const { constEnv:{CONNECT, PORT, ALLOWED_ORIGINS} } = require('./config');

require('dotenv').config();

const app = express();

mongoose.connect(CONNECT);

app.use(cors({ origin: _configureCors }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/notes', noteRouter);
app.use('*', _notFoundError);
app.use(_mainErrorHandler);

app.listen(PORT, () => {
    // require('./defaultNotes');
    console.log('Ok', PORT);
});

function _configureCors(origin, callback) {
    const whiteList = ALLOWED_ORIGINS.split(';');

    if (!origin && process.env.NODE_ENV === 'dev') {
        return callback(null, true);
    }

    if (!whiteList.includes(origin)) {
        return callback(new ErrorHandler(code.FORBIDDEN, errorMessage.Cors), false);
    }

    return callback(null, true);
}

function _notFoundError(err, req, res, next) {
    next({
        status: err.status || code.NOT_FOUND,
        message: err.message || errorMessage.notFound
    });
}

function _mainErrorHandler(err, req, res, next) {
    res
        .status(err.status || code.SERVER_ERROR)
        .json({
            message: err.message
        });
}
