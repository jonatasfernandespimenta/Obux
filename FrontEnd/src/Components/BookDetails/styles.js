import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 30,
    paddingBottom: 75,
  },
})`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const User = styled.View`
  align-items: center;
  flex: 1;
`;

export const UserImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 100px;
  width: 100px;
  border-radius: 55px;
  margin-bottom: 10px;
`;

export const UserName = styled.Text`
  font-size: 18px;
  color: #fff;
  margin-bottom: 5px;
  letter-spacing: 0.5px;
`;

export const UserAge = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-bottom: 5px;
  letter-spacing: 0.5px;
`;

export const UserAddress = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
`;

export const BookAvailability = styled.Text`
  width: 100%;
  border-radius: 5px;
  max-width: 200px;
  background: #f00;
  color: #fff;
  text-align: center;
  padding: 3px;
  margin-top: auto;
  letter-spacing: 0.5px;
`;

export const BookImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
  border-radius: 5px;
  min-height: 240px;
  margin-left: 30px;
`;

export const Body = styled.View`
  align-items: center;
  margin-top: 30px;
  padding-top: 30px;
  border-top-width: 1px;
  border-top-color: #666;
`;

export const BookInfo = styled.View`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 5px;
  padding: 15px;
`;

export const BookAuthor = styled.Text`
  color: #fff;
  font-size: 16px;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
`;

export const BookCondition = styled.Text`
  color: #fff;
  font-size: 16px;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
`;

export const BookSynopsis = styled.View`
  align-items: center;
  margin-top: 10px;
  padding-top: 10px;
  border-top-width: 1px;
  border-top-color: #666;
`;

export const BookSynopsisTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
  text-align: center;
`;

export const BookSynopsisContent = styled.Text`
  color: #fff;
  font-size: 16px;
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 20px;
`;

export const WhatsappFAB = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background: #f00;

  position: absolute;
  bottom: 15px;
  right: 15px;

  align-items: center;
  justify-content: center;
`;
