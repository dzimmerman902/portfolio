import { MdWebAsset as icon } from 'react-icons/md';

export default {
    name: 'project',
    title: 'Projects',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Project Name',
            type: 'string',
            description: 'Name of the Project'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Description of the Project'
        }
    ]
};
