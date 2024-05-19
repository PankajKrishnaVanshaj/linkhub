import axios from "axios";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const LinkResult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(res.data.result.full_short_link);
      setError(""); // Clear any previous errors
    } catch (err) {
      if (err.response) {
        // Server responded with a status other than 200 range
        setError(`Error: ${err.response.data.error}`);
      } else if (err.request) {
        // Request was made but no response received
        setError("Error: No response from server. Please try again later.");
      } else if (err.message.includes("ERR_NAME_NOT_RESOLVED")) {
        // DNS resolution error
        setError(
          "Error: Unable to resolve the server address. Please check the URL or your network connection."
        );
      } else {
        // Other errors
        setError(`Error: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if (loading) {
    return <p className="noData">Loading...</p>;
  }
  if (error) {
    return <p className="noData">{error}</p>;
  }

  return (
    <>
      {shortenLink && (
        <div className="result">
          <p>{shortenLink}</p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button className={copied ? "copied" : ""}>
              Copy to Clipboard
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default LinkResult;
