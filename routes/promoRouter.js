const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res, next) => {
        res.end('will send all the promotions to you.');
    })

    .post((req, res, next) => {
        res.end('will add the promotion : ' + req.body.name + ' with details ' + req.body.description);
    })

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on promotions');
    })

    .delete((req, res, next) => {
        res.end('delete all promotions');
    });



promoRouter.route('/:promoId')
    .get((req, res, next) => {
        res.end('will send details of the promotion : ' + req.params.promoId + ' to you.');
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /promotions/' + req.params.promoId);
    })

    .delete((req, res, next) => {
        res.end('deleting promo : ' + req.params.promoId);
    })

    .put((req, res, next) => {
        res.write('Updating the promo ' + req.params.promoId);
        res.end('will update the promo : ' + req.body.name + ' with details ' + req.body.description);
    });


module.exports = promoRouter;