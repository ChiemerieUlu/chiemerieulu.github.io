// Project data
const projects = [
    {
        title: "Network Intrusion Detection System",
        description: "Built a custom NIDS using Python and Scapy to monitor network traffic and detect potential security threats. Implemented machine learning algorithms to identify anomalous behavior patterns.",
        tags: ["Python", "Machine Learning", "Network Security", "Scapy"]
    },
    {
        title: "Secure Network Architecture Lab",
        description: "Designed and implemented a secure network infrastructure using VLANs, firewalls, and IDS/IPS systems in a virtualized environment. Documented best practices and security policies.",
        tags: ["Cisco", "pfSense", "VMware", "Documentation"]
    },
    {
        title: "Vulnerability Assessment Tool",
        description: "Developed an automated vulnerability scanner that performs network reconnaissance and identifies common security misconfigurations. Includes detailed reporting and remediation recommendations.",
        tags: ["Python", "Nmap", "Security Assessment"]
    }
];

// Function to create project cards
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const title = document.createElement('h3');
    title.textContent = project.title;
    
    const description = document.createElement('p');
    description.textContent = project.description;
    
    card.appendChild(title);
    card.appendChild(description);
    
    project.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'tag';
        tagSpan.textContent = tag;
        card.appendChild(tagSpan);
    });
    
    return card;
}

// Load projects when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        projectsContainer.appendChild(createProjectCard(project));
    });
});