type Props = {
    name: string;
    email: string;
    message: string;
  };
  
  export default function EmailTemplate({ name, email, message }: Props) {
    return (
      <div>
        <h1>New Message from {name}</h1>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Message:</strong></p>
        <p>{message}</p>
      </div>
    );
  }
  