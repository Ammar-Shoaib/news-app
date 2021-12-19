import styles from "../styles/EOM.module.css";

const employee = {
  name: "Goku",
  channel: "#NameIsKakarot",
  domain: "Best of the Best",
  imgUrl: "https://otakukart.com/wp-content/uploads/2021/11/Goku-base-form.jpg",
  desc: "Simple guy with some good qualities",
};

const EOM = () => {
  const { name, channel, domain, imgUrl, desc } = employee;
  return (
    <div className={styles.pageContainer}>
      <h1>{name}</h1>
      <h3>{channel}</h3>
      <h5>{domain}</h5>
      <img
        style={{
          height: "200px",
          width: "200px",
          objectFit: "cover",
          borderRadius: "50%",
        }}
        src={imgUrl}
        alt="alt-img"
      />
      <p>{desc}</p>
    </div>
  );
};

export default EOM;
