const ZEN_QUOTES_API =
  "https://go-quote.azurewebsites.net/tags/life?page=1&page_size=20&format=json";

type Quote = {
  text: "string";
  author: "string";
  tags: ["string"];
  id: 0;
  author_id: "string";
};

type QuoteResp = {
  quotes: Quote[];
};

export const getZenQuote = async () => {
  const resp = await fetch(`${ZEN_QUOTES_API}`, {
    headers: {
      contentType: "application/json",
    },
  });

  console.log(resp.status);

  return (await resp.json()) as QuoteResp;
};
