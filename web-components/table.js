/* global require, module */

const {makeWebComponent} = require('lib/web-components.js');

const Table = makeWebComponent('b8r-table', {
  style:{
    ':host': {
      display: 'block',
      overflow: 'overlay',
    }
  },
  methods:{},
  eventHandlers:{},
  attributes:{},
});

const TableRow = makeWebComponent('b8r-tr', {
  style:{
    ':host': {
      display: 'flex',
    }
  },
  methods:{},
  eventHandlers:{},
  attributes:{},
});

const TableColumn = makeWebComponent('b8r-th', {
  style:false,
  methods:{},
  eventHandlers:{},
  attributes:{},
});

const TableCell = makeWebComponent('b8r-td', {
  style:false,
  methods:{},
  eventHandlers:{},
  attributes:{},
});

module.exports = {Table,TableRow,TableCell,TableColumn}