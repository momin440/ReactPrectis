import React, { useState } from 'react';

const Chatgpt = () => {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);

  const deepseekKey = 'sk-1eea1c5e60364b0b8dbce4b5c62fed49'; // Get from https://platform.deepseek.com/

  const sendMessage = async () => {
    if (!message.trim()) return;
    setLoading(true);

    try {
      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${deepseekKey}`,
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [{ role: 'user', content: message }],
        }),
      });

      const data = await response.json();
      setReply(data.choices?.[0]?.message?.content || 'No response from DeepSeek.');
    } catch (err) {
      console.error(err);
      setReply('Error talking to DeepSeek.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>DeepSeek Chat Integration</h2>
      <textarea
        rows="4"
        placeholder="Ask DeepSeek..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      <br />
      <button onClick={sendMessage} disabled={loading} style={{ marginTop: '10px', padding: '10px 20px' }}>
        {loading ? 'Thinking...' : 'Send'}
      </button>

      {reply && (
        <div style={{ marginTop: '20px', backgroundColor: '#f2f2f2', padding: '15px', borderRadius: '6px' }}>
          <strong>DeepSeek:</strong>
          <p>{reply}</p>
        </div>
      )}
    </div>
  );
};

export default Chatgpt;
