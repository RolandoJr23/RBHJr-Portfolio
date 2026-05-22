import subnettingcert from '../assets/certificates/subnettingfundamentals.jpg';
import ipv4cert from '../assets/certificates/ipv4fundamentals.jpg';
import vlancert from '../assets/certificates/vlanfundamentals.jpg';

export interface Certificate {
  id: string | number;
  title: string;
  issuer: string;
  issueDate: string;
  image: string;
  credentialUrl?: string;
  description?: string;
}

export const certificates: Certificate[] = [
  {
    id: "subnetting-fundamentals",
    title: "Subnetting Fundamentals Course",
    issuer: "Tech Academy",
    issueDate: "2025-05-05",
    image: subnettingcert,
    credentialUrl: "https://www.techacademy.com/verify/subnetting",
    description: "This course covered the foundational concepts of IP subnetting, including CIDR, VLSM, and network address calculation."
  },
  {
    id: "ipv4-fundamentals",
    title: "IPv4 Fundamentals Course",
    issuer: "Tech Academy",
    issueDate: "2025-05-05",
    image: ipv4cert,
    credentialUrl: "https://www.techacademy.com/verify/ipv4",
    description: "A comprehensive course on IPv4 addressing, routing, and network protocols."
  },
  {
    id: "vlan-fundamentals",
    title: "VLAN Fundamentals Course",
    issuer: "Tech Academy",
    issueDate: "2025-05-05",
    image: vlancert,
    credentialUrl: "https://www.techacademy.com/verify/vlan",
    description: "Explored the principles of Virtual Local Area Networks (VLANs), including configuration and inter-VLAN routing."
  },
];
