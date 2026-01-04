import { addNewProfile } from '../data/sampleData';

export function CreateNewProfile({ formData }) {
  // formData = all the form data from CreateProfile
  
  const handleSave = () => {
    // Add to database
    addNewProfile(formData);
    alert('Profile saved! ✅');
  };

  return (
    <div style={{ 
      border: '2px solid #007bff', 
      padding: '20px', 
      borderRadius: '8px',
      marginTop: '30px',
      backgroundColor: '#f0f8ff'
    }}>
      <h3>Review Your Profile:</h3>
      
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Age:</strong> {formData.age}</p>
      <p><strong>Type:</strong> {formData.type}</p>
      <p><strong>Bio:</strong> {formData.bio}</p>
      <p><strong>Skills:</strong> {formData.skills.join(', ')}</p>
      <p><strong>Interested In:</strong> {formData.interestedIn}</p>
      <p><strong>Discord:</strong> {formData.discord}</p>
      <p><strong>LinkedIn:</strong> {formData.linkedinId}</p>

      <button 
        onClick={handleSave}
        style={{
          padding: '10px 20px',
          background: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          marginTop: '15px'
        }}
      >
        Confirm & Save
      </button>
    </div>
  );
}