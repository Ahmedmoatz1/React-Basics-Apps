// import image1 from './img/image-1.png';
import image1 from './img/image-1.png';
const user = {
  name: 'ahmed',
  imageUrl: image1,
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
