import "@massalabs/react-ui-kit/src/global.css";
import { useEffect, useState } from "react";
import { IAccount, providers } from "@massalabs/wallet-provider";
import {
  ClientFactory,
  Args,
  Client,
  bytesToStr,
  fromMAS,
} from "@massalabs/massa-web3";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@massalabs/react-ui-kit";
import { connectWallet } from "../../redux/slices/walletSlice";

enum Provider {
  MASSASTATION = "MASSASTATION",
  BEARBY = "BEARBY",
}

function ConnectWallet() {
  const [client, setClient] = useState<Client>();
  const [provider, setProvider] = useState<Provider>();
  const [account, setAccount] = useState<IAccount>();
  const [lastOpId, setLastOpId] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<any>();

  const isConnected = useSelector((state: any) => state.wallet.isConnected);
  const dispatch = useDispatch();

  const initialize = async (providerName: Provider) => {
    setErrorMessage(null);
    const providersList = await providers(true, 10000);
    const selectedProvider = providersList.find(
      (p) => p.name() === providerName
    );

    if (!selectedProvider) {
      setErrorMessage(
        "Please install MassaStation and the plugin Massa Wallet in it and refresh."
      );
      return;
    }

    const accounts = await selectedProvider.accounts();

    if (accounts.length === 0) {
      setErrorMessage("No accounts found");
      return;
    }
    setClient(
      await ClientFactory.fromWalletProvider(selectedProvider, accounts[0])
    );
    setProvider(providerName);
    setAccount(accounts[0]);
    dispatch(connectWallet(accounts[0]?.address()))
  };

  useEffect(() => {
    initialize(Provider.BEARBY);
  }, []);

  return (

    <div className="bodyContent">
      {account && (
        <div className="wrapper">
          
            <InfoWrapper
              address={account.address()}
              provider={provider || ""}
              lastOpId={lastOpId}
              name={account.name()}
            />
          
        </div>
      )}
      <SelectProvider
        selectedProvider={provider}
        onClick={(providerName) => {
          initialize(providerName);
        }}
      ></SelectProvider>

      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default ConnectWallet;

const SelectProvider = ({
  onClick,
  selectedProvider,
}: {
  onClick: (providerName: Provider) => void;
  selectedProvider?: Provider;
}) => {
  return (
    <div>
      <div style={{ marginBottom: '50px' }} ></div>
      <div className="row">
        <div className="col-lg-3 mb30">
          <span className="box-url">
            <img src="./img/wallet/11.png" alt="" className="mb20" />
            <h4>Massa-Station</h4>
            <p>
              Start exploring blockchain applications in seconds. Trusted by
              over 1 million users worldwide.
            </p>
            {/* Button to connect with Bearby provider */}
            <button
              style={{ display: "block", margin: "0 auto" }}
              className="btn-main"
              onClick={() => onClick(Provider.MASSASTATION)}
              disabled={selectedProvider === Provider.MASSASTATION}
            >
              Use Massa-Station
            </button>
          </span>
        </div>

        <div className="col-lg-3 mb30">
          <span className="box-url">
            <img src="./img/wallet/10.png" alt="" className="mb20" />
            <h4>Bearby</h4>
            <p>
              Start exploring blockchain applications in seconds. Trusted by
              over 1 million users worldwide.
            </p>
            {/* Button to connect with Bearby provider */}
            <button
              style={{ display: "block", margin: "0 auto" }}
              className="btn-main"
              onClick={() => onClick(Provider.BEARBY)}
              disabled={selectedProvider === Provider.BEARBY}
            >
              Use Bearby
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

const InfoWrapper = ({
  address,
  provider,
  lastOpId,
  name,
}: {
  address: string;
  provider: string;
  lastOpId?: string;
  name?: string;
  onclick?: any
}) => {
  return (
    <div className="info-wrapper">
      <ul className="activity-list">
        <li className="act_follow">
          <img className="lazy" src="./img/author/author-1.jpg" alt="" />
          <div className="act_list_text">
            <h4> {address}</h4>
            <span className='color'>provider : {provider}</span>
            <span className="act_list_date">
              {name}
            </span>
            {lastOpId && <h4 id="lastOpId">Last Op id: {lastOpId}</h4>}
          </div>        </li>

      </ul>

    </div>
  );
};
