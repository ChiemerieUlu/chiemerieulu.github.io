// Project data
const projects = [
    {
        title: "Enterprise VLAN Security Implementation",
        description: "Designed and implemented a secure network segmentation using VLANs in Cisco Packet Tracer. Created isolated networks for Development, HR, and Management departments with inter-VLAN routing and strict access controls. Implemented DHCP, ACLs, and security measures against VLAN hopping attacks.",
        tags: ["Cisco", "VLANs", "Network Security", "ACLs", "DHCP"],
        details: {
            github: "https://github.com/chiemerieulu/vlan-security",
            demo: "path-to-your-packet-tracer-demo",
            documentation: "path-to-detailed-docs"
        }
    },
    {
        title: "Network Traffic Analysis Lab",
        description: "Developed a comprehensive network analysis environment using Wireshark for protocol analysis and security threat detection. Created documentation for identifying common attack patterns including ARP spoofing, port scanning, and DoS attempts. Includes custom display filters and analysis procedures.",
        tags: ["Wireshark", "Packet Analysis", "Network Security", "Protocol Analysis"],
        details: {
            github: "https://github.com/chiemerieulu/wireshark-analysis",
            reports: "path-to-sample-reports"
        }
    },
    {
        title: "IDS/IPS Implementation with Snort",
        description: "Set up and configured Snort IDS/IPS system for network monitoring and threat detection. Developed custom rules for detecting SSH brute force attempts and SQL injection attacks. Implemented performance tuning and alert management systems.",
        tags: ["Snort", "IDS/IPS", "Network Security", "Rules Development"],
        details: {
            github: "https://github.com/chiemerieulu/ids-implementation",
            documentation: "path-to-configuration-guide"
        }
    },
    {
        title: "Network Security Baseline Documentation",
        description: "Created comprehensive network hardening documentation including device hardening procedures, authentication setup, and monitoring configurations. Developed implementation guides and change management templates for network security updates.",
        tags: ["Documentation", "Network Hardening", "Security Baseline", "Change Management"],
        details: {
            github: "https://github.com/yourusername/security-baseline",
            templates: "path-to-templates"
        }
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
    
    const tagsContainer = document.createElement('div');
    tagsContainer.className = 'tags-container';
    
    project.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'tag';
        tagSpan.textContent = tag;
        tagsContainer.appendChild(tagSpan);
    });
    
    const linksContainer = document.createElement('div');
    linksContainer.className = 'project-links';
    
    if (project.details) {
        Object.entries(project.details).forEach(([key, value]) => {
            const link = document.createElement('a');
            link.href = value;
            link.className = 'project-link';
            link.textContent = key.charAt(0).toUpperCase() + key.slice(1);
            link.target = '_blank';
            linksContainer.appendChild(link);
        });
    }
    
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(tagsContainer);
    card.appendChild(linksContainer);
    
    return card;
}

// Load projects when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        projectsContainer.appendChild(createProjectCard(project));
    });
});