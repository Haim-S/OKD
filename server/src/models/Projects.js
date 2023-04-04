

const Projects =  [
    { name: 'id', type: 'INT(11)', isPrimary: true, isAutoIncrement: true },
    { name: 'create_at', type: 'timestamp default current_timestamp', isPrimary: false, isAutoIncrement: false },
    { name: 'modify_at', type: 'timestamp on update current_timestamp', isPrimary: false, isAutoIncrement: false },
    { name: 'name_project', type: 'VARCHAR(255) unique key', isPrimary: false, isAutoIncrement: false },
    { name: 'project_manager', type: 'VARCHAR(255)', isPrimary: false, isAutoIncrement: false },
    { name: 'name_architect', type: 'VARCHAR(255)', isPrimary: false, isAutoIncrement: false },
    { name: 'name_photographer', type: 'VARCHAR(255)', isPrimary: false, isAutoIncrement: false },
    { name: 'category', type: 'VARCHAR(255)', isPrimary: false, isAutoIncrement: false },
    { name: 'img_src', type: 'VARCHAR(355)', isPrimary: false, isAutoIncrement: false },
  ];



 module.exports = { Projects};