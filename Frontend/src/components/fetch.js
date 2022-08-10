export default function fetcher(url, cbk)
{
    fetch(url)
      .then((res) =>
        res.json()
      )
      .then((out) =>
        cbk(out)
      )
      .catch((err) =>
        console.error(err)
      );
}
