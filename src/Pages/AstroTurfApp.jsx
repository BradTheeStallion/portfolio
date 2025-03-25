import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Styles/AstroTurfApp.css';

const BASE_URL = 'https://astroturf.onrender.com/api';

const MemberManagement = () => {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState({
    name: '',
    address: '',
    email: '',
    phoneNumber: '',
    membershipStartDate: '',
    membershipDuration: 0
  });
  const [searchCriteria, setSearchCriteria] = useState({
    name: '',
    phoneNumber: '',
    startDate: ''
  });

  const fetchMembers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/members`);
      setMembers(response.data);
    } catch (error) {
      console.error('Error fetching members:', error);
      alert('Failed to fetch members. Please try again.');
    }
  };

  const createMember = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/members`, newMember);
      fetchMembers();
      setNewMember({
        name: '',
        address: '',
        email: '',
        phoneNumber: '',
        membershipStartDate: '',
        membershipDuration: 0
      });
      alert('Member created successfully!');
    } catch (error) {
      console.error('Error creating member:', error);
      alert('Failed to create member. Please check your inputs.');
    }
  };

  const searchMembers = async (type) => {
    try {
      let response;
      switch(type) {
        case 'name':
          response = await axios.get(`${BASE_URL}/members/search/by-name?name=${searchCriteria.name}`);
          break;
        case 'phone':
          response = await axios.get(`${BASE_URL}/members/search/by-phone?phoneNumber=${searchCriteria.phoneNumber}`);
          break;
        case 'startDate':
          response = await axios.get(`${BASE_URL}/members/search/by-membership-start-date?startDate=${searchCriteria.startDate}`);
          break;
      }
      setMembers(response.data);
    } catch (error) {
      console.error('Error searching members:', error);
      alert('Failed to search members. Please try again.');
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <div className="member-management">
      <h2>Member Management</h2>
      
      {/* Create Member Form */}
      <form onSubmit={createMember}>
        <input
          type="text"
          placeholder="Name"
          value={newMember.name}
          onChange={(e) => setNewMember({...newMember, name: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={newMember.address}
          onChange={(e) => setNewMember({...newMember, address: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={newMember.email}
          onChange={(e) => setNewMember({...newMember, email: e.target.value})}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={newMember.phoneNumber}
          onChange={(e) => setNewMember({...newMember, phoneNumber: e.target.value})}
          required
        />
        <input
          type="date"
          placeholder="Membership Start Date"
          value={newMember.membershipStartDate}
          onChange={(e) => setNewMember({...newMember, membershipStartDate: e.target.value})}
          required
        />
        <input
          type="number"
          placeholder="Membership Duration (months)"
          value={newMember.membershipDuration}
          onChange={(e) => setNewMember({...newMember, membershipDuration: parseInt(e.target.value)})}
          required
        />
        <button type="submit">Create Member</button>
      </form>

      {/* Search Members */}
      <div className="search-members">
        <div>
          <input
            type="text"
            placeholder="Search by Name"
            value={searchCriteria.name}
            onChange={(e) => setSearchCriteria({...searchCriteria, name: e.target.value})}
          />
          <button onClick={() => searchMembers('name')}>Search by Name</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search by Phone"
            value={searchCriteria.phoneNumber}
            onChange={(e) => setSearchCriteria({...searchCriteria, phoneNumber: e.target.value})}
          />
          <button onClick={() => searchMembers('phone')}>Search by Phone</button>
        </div>
        <div>
          <input
            type="date"
            placeholder="Search by Start Date"
            value={searchCriteria.startDate}
            onChange={(e) => setSearchCriteria({...searchCriteria, startDate: e.target.value})}
          />
          <button onClick={() => searchMembers('startDate')}>Search by Start Date</button>
        </div>
      </div>

      {/* Members List */}
      <div className="members-list">
        <h3>Members</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Membership Start</th>
              <th>Membership Duration</th>
            </tr>
          </thead>
          <tbody>
            {members.map(member => (
              <tr key={member.id}>
                <td>{member.id}</td>
                <td>{member.name}</td>
                <td>{member.address}</td>
                <td>{member.email}</td>
                <td>{member.phoneNumber}</td>
                <td>{member.membershipStartDate}</td>
                <td>{member.membershipDuration} months</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TournamentManagement = () => {
  const [tournaments, setTournaments] = useState([]);
  const [newTournament, setNewTournament] = useState({
    startDate: '',
    endDate: '',
    location: '',
    entryFee: '',
    cashPrize: ''
  });
  const [searchCriteria, setSearchCriteria] = useState({
    startDate: '',
    location: '',
    startRange: '',
    endRange: '',
    memberId: ''
  });

  const fetchTournaments = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/tournaments`);
      setTournaments(response.data);
    } catch (error) {
      console.error('Error fetching tournaments:', error);
      alert('Failed to fetch tournaments. Please try again.');
    }
  };

  const createTournament = async (e) => {
    e.preventDefault();
    try {
      const tournamentData = {
        ...newTournament,
        entryFee: parseFloat(newTournament.entryFee),
        cashPrize: parseFloat(newTournament.cashPrize)
      };
      const response = await axios.post(`${BASE_URL}/tournaments`, tournamentData);
      fetchTournaments();
      setNewTournament({
        startDate: '',
        endDate: '',
        location: '',
        entryFee: '',
        cashPrize: ''
      });
      alert('Tournament created successfully!');
    } catch (error) {
      console.error('Error creating tournament:', error);
      alert('Failed to create tournament. Please check your inputs.');
    }
  };

  const searchTournaments = async (type) => {
    try {
      let response;
      switch(type) {
        case 'startDate':
          response = await axios.get(`${BASE_URL}/tournaments/search/by-start-date?startDate=${searchCriteria.startDate}`);
          break;
        case 'location':
          response = await axios.get(`${BASE_URL}/tournaments/search/by-location?location=${searchCriteria.location}`);
          break;
        case 'dateRange':
          response = await axios.get(`${BASE_URL}/tournaments/search/by-date-range?startDate=${searchCriteria.startRange}&endDate=${searchCriteria.endRange}`);
          break;
        case 'member':
          response = await axios.get(`${BASE_URL}/tournaments/search/by-member?memberId=${searchCriteria.memberId}`);
          break;
      }
      setTournaments(response.data);
    } catch (error) {
      console.error('Error searching tournaments:', error);
      alert('Failed to search tournaments. Please try again.');
    }
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  return (
    <div className="tournament-management">
      <h2>Tournament Management</h2>
      
      {/* Create Tournament Form */}
      <form onSubmit={createTournament}>
        <input
          type="date"
          placeholder="Start Date"
          value={newTournament.startDate}
          onChange={(e) => setNewTournament({...newTournament, startDate: e.target.value})}
          required
        />
        <input
          type="date"
          placeholder="End Date"
          value={newTournament.endDate}
          onChange={(e) => setNewTournament({...newTournament, endDate: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={newTournament.location}
          onChange={(e) => setNewTournament({...newTournament, location: e.target.value})}
          required
        />
        <input
          type="number"
          step="0.01"
          placeholder="Entry Fee"
          value={newTournament.entryFee}
          onChange={(e) => setNewTournament({...newTournament, entryFee: e.target.value})}
          required
        />
        <input
          type="number"
          step="0.01"
          placeholder="Cash Prize"
          value={newTournament.cashPrize}
          onChange={(e) => setNewTournament({...newTournament, cashPrize: e.target.value})}
          required
        />
        <button type="submit">Create Tournament</button>
      </form>

      {/* Search Tournaments */}
      <div className="search-tournaments">
        <div>
          <input
            type="date"
            placeholder="Search by Start Date"
            value={searchCriteria.startDate}
            onChange={(e) => setSearchCriteria({...searchCriteria, startDate: e.target.value})}
          />
          <button onClick={() => searchTournaments('startDate')}>Search by Start Date</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search by Location"
            value={searchCriteria.location}
            onChange={(e) => setSearchCriteria({...searchCriteria, location: e.target.value})}
          />
          <button onClick={() => searchTournaments('location')}>Search by Location</button>
        </div>
        <div>
          <label>Date Range Search</label>
          <input
            type="date"
            placeholder="Start Date"
            value={searchCriteria.startRange}
            onChange={(e) => setSearchCriteria({...searchCriteria, startRange: e.target.value})}
          />
          <input
            type="date"
            placeholder="End Date"
            value={searchCriteria.endRange}
            onChange={(e) => setSearchCriteria({...searchCriteria, endRange: e.target.value})}
          />
          <button onClick={() => searchTournaments('dateRange')}>Search by Date Range</button>
        </div>
        <div>
          <input
            type="number"
            placeholder="Search by Member ID"
            value={searchCriteria.memberId}
            onChange={(e) => setSearchCriteria({...searchCriteria, memberId: e.target.value})}
          />
          <button onClick={() => searchTournaments('member')}>Search by Member</button>
        </div>
      </div>

      {/* Tournaments List */}
      <div className="tournaments-list">
        <h3>Tournaments</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Location</th>
              <th>Entry Fee</th>
              <th>Cash Prize</th>
              <th>Participants</th>
            </tr>
          </thead>
          <tbody>
            {tournaments.map(tournament => (
              <tr key={tournament.id}>
                <td>{tournament.id}</td>
                <td>{tournament.startDate}</td>
                <td>{tournament.endDate}</td>
                <td>{tournament.location}</td>
                <td>${tournament.entryFee}</td>
                <td>${tournament.cashPrize}</td>
                <td>{tournament.participantIds.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const MemberTournamentInteraction = () => {
  const [memberId, setMemberId] = useState('');
  const [tournamentId, setTournamentId] = useState('');

  const addMemberToTournament = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/tournaments/${tournamentId}/members/${memberId}`);
      alert('Member added to tournament successfully!');
    } catch (error) {
      console.error('Error adding member to tournament:', error);
      alert('Failed to add member to tournament. Please check the IDs.');
    }
  };

  const removeMemberFromTournament = async () => {
    try {
      const response = await axios.delete(`${BASE_URL}/tournaments/${tournamentId}/members/${memberId}`);
      alert('Member removed from tournament successfully!');
    } catch (error) {
      console.error('Error removing member from tournament:', error);
      alert('Failed to remove member from tournament. Please check the IDs.');
    }
  };

  return (
    <div className="member-tournament-interaction">
      <h2>Member-Tournament Interaction</h2>
      <div>
        <input
          type="number"
          placeholder="Tournament ID"
          value={tournamentId}
          onChange={(e) => setTournamentId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Member ID"
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
        />
        <button onClick={addMemberToTournament}>Add Member to Tournament</button>
        <button onClick={removeMemberFromTournament}>Remove Member from Tournament</button>
      </div>
    </div>
  );
};

const AstroTurfApp = () => {
  return (
    <div className="astroturf-app">
      <h1>AstroTurf Management System</h1>
      <MemberManagement />
      <TournamentManagement />
      <MemberTournamentInteraction />
    </div>
  );
};

export default AstroTurfApp;