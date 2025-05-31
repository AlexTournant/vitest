export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: UserRole;
    department: string;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
}

export enum UserRole {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    DEVELOPER = 'DEVELOPER',
    TESTER = 'TESTER',
    USER = 'USER'
}

export enum TicketStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    IN_REVIEW = 'IN_REVIEW',
    TESTING = 'TESTING',
    DONE = 'DONE',
    CLOSED = 'CLOSED',
    BLOCKED = 'BLOCKED'
}

export enum TicketPriority {
    CRITICAL = 'CRITICAL',
    HIGH = 'HIGH',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW'
}

export enum TicketType {
    BUG = 'BUG',
    FEATURE = 'FEATURE',
    IMPROVEMENT = 'IMPROVEMENT',
    TASK = 'TASK',
    EPIC = 'EPIC'
}

export interface Ticket {
    id: string;
    title: string;
    description: string;
    status: TicketStatus;
    priority: TicketPriority;
    type: TicketType;
    assignedTo?: User;
    reporter: User;
    project: Project;
    labels: string[];
    attachments: Attachment[];
    comments: Comment[];
    estimatedHours?: number;
    loggedHours: number;
    dueDate?: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface Project {
    id: string;
    name: string;
    key: string; // Ex: "TFP" pour TaskFlow Pro
    description: string;
    manager: User;
    members: User[];
    isActive: boolean;
    createdAt: Date;
}

export interface Comment {
    id: string;
    content: string;
    author: User;
    ticketId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Attachment {
    id: string;
    filename: string;
    url: string;
    size: number;
    mimeType: string;
    uploadedBy: User;
    createdAt: Date;
}