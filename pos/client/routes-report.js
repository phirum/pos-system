import {Meteor} from 'meteor/meteor';
import {Session} from 'meteor/session';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {FlowRouterTitle} from 'meteor/ostrio:flow-router-title';
import 'meteor/arillo:flow-router-helpers';
import 'meteor/zimme:active-route';
import 'meteor/theara:flow-router-breadcrumb';

// Lib
import {__} from '../../core/common/libs/tapi18n-callback-helper.js';

// Layout
import {Layout} from '../../core/client/libs/render-layout.js';
import '../../core/imports/ui/layouts/report/index.html';

// Group
let PosRoutes = FlowRouter.group({
    prefix: '/pos',
    title: "Pos",
    titlePrefix: 'Pos > ',
    subscriptions: function (params, queryParams) {
        // Branch by user
        if (Meteor.user()) {
            let rolesBranch = Meteor.user().rolesBranch;
            this.register('core.branch', Meteor.subscribe('core.branch', {_id: {$in: rolesBranch}}));
        }
    }
});

// Invoice
import '../imports/ui/reports/invoice.js';
PosRoutes.route('/invoice-report', {
    name: 'pos.invoiceReport',
    title: 'Invoice Report',
    action: function (params, queryParams) {
        Layout.main('Pos_invoiceReport');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Invoice Report',
        // icon: 'cart-plus',
        parent: 'pos.home'
    }
});
PosRoutes.route('/invoice-report-gen', {
    name: 'pos.invoiceReportGe',
    title: 'Invoice Report',
    action: function (params, queryParams) {
        Layout.report('Pos_invoiceReportGen');
    }
});

// Order
import '../imports/ui/reports/order.js';
PosRoutes.route('/order-report', {
    name: 'pos.orderReport',
    title: 'Order Report',
    action: function (params, queryParams) {
        Layout.main('Pos_orderReport');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Order Report',
        // icon: 'users',
        parent: 'pos.home'
    }
});
