Module = typeof Module === 'undefined' ? {} : Module;

Module.Pos = {
    name: 'Pos',
    version: '2.0.0',
    summary: 'Pos is ...',
    roles: [
        'setting',
        'data-insert',
        'data-update',
        'data-remove',
        'reporter'
    ],
    dump: {
        setting: [
            'pos_location'
        ],
        data: [
            'pos_customer',
            'pos_order'
        ]
    }
};
