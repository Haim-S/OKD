



const Users =  [ 
    { name: 'id', type: 'CHAR(36)', isPrimary: true, isAutoIncrement: false},
    { name: 'create_at', type: 'timestamp default current_timestamp', isPrimary: false, isAutoIncrement: false },
    { name: 'modify_at', type: 'timestamp on update current_timestamp', isPrimary: false, isAutoIncrement: false },
    { name: 'first_name', type: 'VARCHAR(55) unique key',isPrimary: false, isAutoIncrement: false },
    { name: 'last_name', type: 'VARCHAR(55)', isPrimary: false, isAutoIncrement: false },
    { name: 'email', type: 'VARCHAR(55) unique key', isPrimary: false, isAutoIncrement: false },
    { name: 'img_src', type: 'VARCHAR(255)',  isPrimary: false, isAutoIncrement: false },
    { name: 'type', type: 'VARCHAR(255)', isPrimary: false, isAutoIncrement: false },
    { name: 'password', type: 'VARCHAR(255) unique key', isPrimary: false, isAutoIncrement: false },
    { name: 'jwt_ac_token', type: 'VARCHAR(255) unique key', isPrimary: false, isAutoIncrement: false },
    { name: 'jwt_rf_token', type: 'VARCHAR(255) unique key', isPrimary: false, isAutoIncrement: false },
  ];

 module.exports = { Users};