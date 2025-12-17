import React from 'react';
import './TeamMemberModal.css';

const TeamMemberModal = ({ isOpen, onClose, member }) => {
  if (!isOpen || !member) return null;

  return (
    <div className="team-modal-overlay" onClick={onClose}>
      <div className="team-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="team-modal-close" onClick={onClose}>×</button>
        
        <div className="team-modal-header">
          <div className="team-modal-image">
            <img 
              src={member.image} 
              alt={member.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Ccircle cx="100" cy="100" r="100" fill="%23e0e0e0"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="16" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EPhoto Coming Soon%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>
          <div className="team-modal-title-section">
            <h3 className="team-modal-role">{member.role}</h3>
            <h4 className="team-modal-name">{member.name}</h4>
          </div>
        </div>

        <div className="team-modal-description">
          {member.description.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberModal;

