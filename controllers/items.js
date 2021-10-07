// ======== REQUIRE/DEPENDENCIES ========
const express = require('express');
const inventoryRouter = express.Router();
const Inventory = require('../models/inventory.js');

// ======== ROUTES ========

// Index 
inventoryRouter.get('/inventory', (req, res) =>{
    // let qty =  - parseInt(store.qty)
    Inventory.find({}, (error, allItems) =>{
        res.render('index.ejs', {
            item: allItems
        });
    });
});


// New
inventoryRouter.get('/new', (req, res) =>{
    res.render('new.ejs');
});

// Delete
inventoryRouter.delete('/:id', (req, res) =>{
    Inventory.findByIdAndRemove(req.params.id, (err, data) =>{
        res.redirect('/inventory');
    });
});


// Update
inventoryRouter.put('/:id', (req, res) =>{
    Inventory.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (error, updatedItems) =>{
        res.redirect(`/inventory/${req.params.id}`);
    });
});

// Create
inventoryRouter.post('/', (req, res) =>{
    Inventory.create(req.body, (error, createdItem) =>{
        res.redirect('/inventory');
    });
});

// Edit
inventoryRouter.get('/:id/edit', (req, res) =>{
    Inventory.findById(req.params.id, (error, foundItems) =>{
        res.render('edit.ejs', {
            item: foundItems
        });
    });
});

// Show
inventoryRouter.get('/:id', (req, res) =>{
    Inventory.findById(req.params.id, (err, foundItems) =>{
        res.render('show.ejs', {
            item: foundItems,
        });
    });
});


// ======== EXPORT ========
module.exports = inventoryRouter;