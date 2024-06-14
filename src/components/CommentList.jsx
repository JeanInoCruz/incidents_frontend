const AuthForm = ({ onSubmit, buttonText, email, setEmail, password, setPassword }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default AuthForm;
