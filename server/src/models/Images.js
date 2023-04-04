

const Images =  [
    { name: 'id', type: 'INT(11)', isPrimary: true, isAutoIncrement: true },
    { name: 'create_at', type: 'timestamp default current_timestamp', isPrimary: false, isAutoIncrement: false },
    { name: 'modify_at', type: 'timestamp on update current_timestamp', isPrimary: false, isAutoIncrement: false },
    { name: 'image_src', type: 'VARCHAR(255)', isPrimary: false, isAutoIncrement: false },
    { name: 'category', type: 'VARCHAR(255)', isPrimary: false, isAutoIncrement: false },
    { name: 'project_name', type: 'VARCHAR(255)', isPrimary: false, isAutoIncrement: false },
  ];



 module.exports = { Images};