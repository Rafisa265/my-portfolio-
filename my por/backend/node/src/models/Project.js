// In-memory database for demo
let projects = [
    {
        id: '1',
        title: 'ThreatGuard Sentinel',
        description: 'Automated threat detection dashboard & log analyzer. Reduced false positives by 38% for a fintech startup.',
        tags: ['Python', 'SIEM', 'Risk Analysis'],
        icon: '🛡️'
    },
    {
        id: '2',
        title: 'Nexus Studio Platform',
        description: 'Full-stack creative agency portal with role-based access and secure API implementation.',
        tags: ['React', 'Node.js', 'Auth0'],
        icon: '🌐'
    },
    {
        id: '3',
        title: 'Brand Identity · EthioTech',
        description: 'Complete visual language, logo design, and marketing assets for a rising tech hub.',
        tags: ['Illustrator', 'Figma', 'Branding'],
        icon: '🎨'
    }
];

const getAll = () => {
    return projects;
};

const getById = (id) => {
    return projects.find(p => p.id === id);
};

const create = (data) => {
    const newProject = {
        id: String(projects.length + 1),
        ...data,
        tags: data.tags || ['New']
    };
    projects.push(newProject);
    return newProject;
};

module.exports = { getAll, getById, create };