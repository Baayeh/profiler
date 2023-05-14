import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from '../Loader';

type AdviseProps = {
  advice: string;
  date: string;
  id: number;
};

const Advisor = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<AdviseProps[]>([]);
  const [msg, setMsg] = useState('');

  const URL = 'https://api.adviceslip.com/advice/search';

  const fetchQuery = async (query: string) => {
    try {
      const response = await axios.get(`${URL}/${query}`);
      const { slips, message } = response.data;
      if (slips) {
        const newData = slips.map((slip: AdviseProps, index: number) => {
          return {
            id: index + 1,
            advice: slip.advice,
          };
        });
        setData(newData);
        setMsg('');
      } else if (message) {
        const { text } = message;
        setMsg(text);
        setData([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    fetchQuery(searchTerm);
  };

  useEffect(() => {
    if (data.length > 0) {
      setIsLoading(false);
    }
  }, [data]);

  useEffect(() => {
    if (msg.length > 0) {
      setIsLoading(false);
    }
  }, [msg]);

  return (
    <section className="advisor-section">
      <div className="advisor-search">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            aria-label="Search for advice"
            name="advisor-search"
            placeholder="Search for advice on eg: love, money, etc"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
      {isLoading && <Loader />}
      {data && !isLoading && (
        <ul className="list-group mt-3">
          {data && data.length > 0
            ? data.map((item) => {
                return (
                  <li key={item.id} className="list-group-item">
                    {item.advice}
                  </li>
                );
              })
            : msg && (
                <li className="list-group-item text-center fw-bold">{msg}</li>
              )}
        </ul>
      )}
      <div className="mt-4 border p-3 text-center">
        <p>
          Hello there! I chose this API specifically to provide free advice to
          those who are seeking it. With this API, you will have access to over
          10 million pieces of advice annually, so don't hesitate to ask for any
          help you may require! Whether you're facing a challenging situation or
          just need a friendly ear to listen,{' '}
          <span style={{ color: '#ff6dcd' }}>AI Advisor</span> is here to offer
          support in any way possible.
        </p>
        <p>
          Thanks to{' '}
          <a href="https://api.adviceslip.com/" target="_blank">
            Tom Kiss
          </a>{' '}
          for this lovely API👌
        </p>
      </div>
    </section>
  );
};
export default Advisor;
