// Ready-made examples for missions, keyed by day. Practice examples only — not recommendations.
// Each entry: { note: "how to use them", tickers: [["TICKER", "Company"], ...] }
(() => {
  const BIG = [["AAPL", "Apple"], ["MSFT", "Microsoft"], ["NVDA", "Nvidia"]];
  const KNOWN = [["COST", "Costco"], ["AAPL", "Apple"], ["NKE", "Nike"]];
  const SMALL = [["NATH", "Nathan's Famous"], ["WEYS", "Weyco Group"], ["ESCA", "Escalade"]];
  const QUALITY = [["MSFT", "Microsoft"], ["COST", "Costco"], ["V", "Visa"]];
  const OPTIONABLE = [["AAPL", "Apple"], ["MSFT", "Microsoft"], ["SPY", "S&P 500 ETF"]];
  // Companies whose quarters end at different times, so someone here is always reporting soon.
  const EARNINGS_ROTATION = [
    ["NVDA", "Nvidia"], ["WMT", "Walmart"], ["HD", "Home Depot"],
    ["COST", "Costco"], ["NKE", "Nike"], ["ORCL", "Oracle"], ["ADBE", "Adobe"], ["FDX", "FedEx"],
    ["AAPL", "Apple"], ["MSFT", "Microsoft"], ["JPM", "JPMorgan"],
  ];
  const ROTATION_NOTE = "Most big companies report in late Jan, Apr, Jul and Oct (Apple, Microsoft, JPMorgan). Nvidia, Walmart and Home Depot report in Feb, May, Aug and Nov. Costco, Nike, Oracle, Adobe and FedEx report in Mar, Jun, Sep and Dec. Tap each and check its next earnings date — one of these is almost always within two weeks.";
  const GAPS = [["NVDA", "Nvidia"], ["META", "Meta"], ["NFLX", "Netflix"]];
  const GAPS_NOTE = "Famous earnings gaps you can scroll back to on the daily chart: Nvidia, May 25, 2023 (up about 24%); Meta, Feb 2, 2023 (up about 23%); Meta, Feb 3, 2022 (down about 26%); Netflix, Apr 20, 2022 (down about 35%). Use these if you can't find a fresh one.";

  window.TRADE_PICKS = {
    1: { note: "Compare the big one with any of the three small ones. The small companies trade far fewer shares a day.", tickers: [["AAPL", "Apple"], ...SMALL] },
    4: { note: "Use one giant, one mid-size and one small company so the spread differences are obvious.", tickers: [["AAPL", "Apple"], ["F", "Ford"], ["NATH", "Nathan's Famous"]] },
    6: { note: ROTATION_NOTE, tickers: EARNINGS_ROTATION },
    8: { note: "Pick any one. All three have simple businesses and clear investor-relations pages.", tickers: KNOWN },
    9: { note: "Pick any one, ideally the same company you used yesterday.", tickers: KNOWN },
    10: { note: "Search any of these by ticker on SEC EDGAR and open the latest 10-Q.", tickers: KNOWN },
    11: { note: "Three ready-made peer groups. Pick one row: drinks (Coca-Cola, PepsiCo, Monster), payments (Visa, Mastercard, American Express) or home improvement (Home Depot, Lowe's).", tickers: [["KO", "Coca-Cola"], ["PEP", "PepsiCo"], ["MNST", "Monster"], ["V", "Visa"], ["MA", "Mastercard"], ["AXP", "American Express"], ["HD", "Home Depot"], ["LOW", "Lowe's"]] },
    12: { note: ROTATION_NOTE, tickers: EARNINGS_ROTATION },
    13: { note: "Use Apple as the company you know, then compare it with one of the small companies.", tickers: [["AAPL", "Apple"], ...SMALL] },
    14: { note: "Pick one for your scorecard. Suggested peers: Costco vs Walmart and Target; Visa vs Mastercard and American Express; Nvidia vs AMD and Broadcom.", tickers: [["COST", "Costco"], ["V", "Visa"], ["NVDA", "Nvidia"]] },
    15: { note: GAPS_NOTE, tickers: [["SPY", "S&P 500 ETF"], ...GAPS] },
    16: { note: "Any of these has a clean, heavily traded daily chart.", tickers: BIG },
    17: { note: "Pick one and draw your zones on its daily chart.", tickers: [["AAPL", "Apple"], ["COST", "Costco"], ["NVDA", "Nvidia"]] },
    18: { note: "Pick one and find its last two earnings days (marked with an E on TradingView charts).", tickers: [["NVDA", "Nvidia"], ["META", "Meta"], ["COST", "Costco"]] },
    19: { note: "Pick one. Earnings days are marked with an E on TradingView charts.", tickers: [["NVDA", "Nvidia"], ["META", "Meta"], ["COST", "Costco"]] },
    20: { note: "Pick one for the indicator exercise.", tickers: [["NVDA", "Nvidia"], ["META", "Meta"], ["COST", "Costco"]] },
    21: { note: "Market ETFs first, then compare any three of the sector ETFs: technology (XLK), financials (XLF), energy (XLE), health care (XLV), consumer discretionary (XLY), industrials (XLI).", tickers: [["SPY", "S&P 500 ETF"], ["QQQ", "Nasdaq-100 ETF"], ["XLK", "Tech sector"], ["XLF", "Financials"], ["XLE", "Energy"], ["XLV", "Health care"], ["XLY", "Consumer discretionary"], ["XLI", "Industrials"]] },
    22: { note: ROTATION_NOTE, tickers: EARNINGS_ROTATION },
    23: { note: ROTATION_NOTE + " For this mission pick whichever reported most recently.", tickers: EARNINGS_ROTATION },
    24: { note: "Check the two market ETFs, then divide one stock by SPY (type NVDA/SPY in TradingView).", tickers: [["SPY", "S&P 500 ETF"], ["QQQ", "Nasdaq-100 ETF"], ["NVDA", "Nvidia"]] },
    25: { note: "If you can't find a fresh one, practice on history: scroll to the weeks after Meta's Feb 2, 2023 earnings gap or Nvidia's May 25, 2023 gap and plan the first pullback as if it were today.", tickers: [["META", "Meta"], ["NVDA", "Nvidia"]] },
    26: { note: "Look for flat bases on these heavily traded leaders. For a past breakout on news, see Nvidia on May 25, 2023.", tickers: [["AAPL", "Apple"], ["MSFT", "Microsoft"], ["COST", "Costco"], ["V", "Visa"], ["JPM", "JPMorgan"], ["NVDA", "Nvidia"]] },
    27: { note: GAPS_NOTE, tickers: GAPS },
    29: { note: "Test your calculator on these charts.", tickers: [["AAPL", "Apple"], ["COST", "Costco"], ["NVDA", "Nvidia"]] },
    30: { note: "If you have no paper trades yet, mark hypothetical trades on one of these charts.", tickers: BIG },
    31: { note: GAPS_NOTE, tickers: GAPS },
    32: { note: GAPS_NOTE + " Use Bar Replay so you can't see what happened next.", tickers: GAPS },
    36: { note: "Pick two. All three are covered as case studies this week.", tickers: QUALITY },
    37: { note: "Today's moat examples. Pick one.", tickers: [["V", "Visa"], ["MA", "Mastercard"], ["ASML", "ASML"], ["MSFT", "Microsoft"], ["NVDA", "Nvidia"], ["COST", "Costco"], ["GOOGL", "Alphabet"]] },
    38: { note: "Pick one and search its ticker on SEC EDGAR.", tickers: [["MSFT", "Microsoft"], ["COST", "Costco"], ["NVDA", "Nvidia"]] },
    39: { note: "Pick one. Useful peers: Microsoft vs Alphabet; Costco vs Walmart; Nvidia vs AMD.", tickers: [["MSFT", "Microsoft"], ["COST", "Costco"], ["NVDA", "Nvidia"]] },
    40: { note: "The case-study stock.", tickers: [["SPCX", "SpaceX"]] },
    41: { note: "Use one as your pretend core position.", tickers: QUALITY },
    42: { note: "Starter candidates from this week's case studies. Score them yourself — they are examples to analyze, not recommendations.", tickers: [["MSFT", "Microsoft"], ["GOOGL", "Alphabet"], ["NVDA", "Nvidia"], ["COST", "Costco"], ["V", "Visa"], ["MA", "Mastercard"], ["ASML", "ASML"], ["SPCX", "SpaceX"]] },
    43: { note: "All three have very active option chains.", tickers: OPTIONABLE },
    44: { note: "Pick one with an active option chain.", tickers: OPTIONABLE },
    45: { note: "Pick one with an active option chain.", tickers: OPTIONABLE },
    46: { note: "Pick one with an active option chain.", tickers: OPTIONABLE },
    47: { note: "Apple and Microsoft have earnings dates to check against; SPY has none.", tickers: OPTIONABLE },
    48: { note: "Compare Apple with one of the small companies. If a small company has few or no options listed, that itself is the lesson.", tickers: [["AAPL", "Apple"], ["CRMT", "America's Car-Mart"], ["LAKE", "Lakeland Industries"]] },
    49: { note: ROTATION_NOTE, tickers: EARNINGS_ROTATION },
    50: { note: "Large, liquid stocks with active option chains.", tickers: [["AAPL", "Apple"], ["MSFT", "Microsoft"], ["KO", "Coca-Cola"]] },
    51: { note: "Pretend you own 100 shares of one of these.", tickers: [["MSFT", "Microsoft"], ["COST", "Costco"], ["V", "Visa"]] },
    52: { note: "Both have tight option spreads and $5-wide strikes.", tickers: [["SPY", "S&P 500 ETF"], ["AAPL", "Apple"]] },
    53: { note: ROTATION_NOTE, tickers: EARNINGS_ROTATION },
    54: { note: "ETFs have no earnings dates, which makes them the simplest place to practice.", tickers: [["SPY", "S&P 500 ETF"], ["QQQ", "Nasdaq-100 ETF"], ["IWM", "Russell 2000 ETF"]] },
    55: { note: "Pick one with an active option chain.", tickers: [["SPY", "S&P 500 ETF"], ["AAPL", "Apple"]] },
  };
})();
