import { Text, View , Image, TextInput, Button, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';


export default function Index() {
  return (
    <View
      style={{
        backgroundColor: "#f1f1f1",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Image
      source={require("@/assets/images/plus-icon.jpg")}
      style={{ width: 100, height: 100, borderRadius: 20, marginBottom: 20 }}
      />
      <Text style={{fontSize:24,fontWeight:"bold",margin:20}}>Sign In</Text>
      <Text style={{color:"#515151",marginBottom:30}}>Let's experience the joy of telecare AI.</Text>
      <Text style={{alignSelf: 'flex-start',paddingLeft:20,fontWeight:"bold",margin:5}}>Email Address</Text>
      <View style={{width: '90%',height: 50,backgroundColor: '#fff',borderRadius: 20,flexDirection: 'row',alignItems: 'center',paddingHorizontal: 15,marginBottom: 20,
        }}>
        <Ionicons name="mail-outline" size={22} color="gray" style={{ marginRight: 10 }}/>
        <TextInput placeholder="Enter your Email"
          style={{
            flex: 1,
          }}
        />
      </View>
      <Text style={{alignSelf: 'flex-start',paddingLeft:20,fontWeight:"bold",margin:5}}>Password</Text>
      <View style={{width: '90%',height: 50,backgroundColor: '#fff',borderRadius: 20,flexDirection: 'row',alignItems: 'center',paddingHorizontal: 15,marginBottom: 20,
        }}>
        <Ionicons name="lock-closed" size={22} color="gray" style={{ marginRight: 10 }}/>
        <TextInput placeholder="Enter your Password"
          style={{
            flex: 1
          }}
        />
        
      </View>
      <View style={{ width: '90%',height:'auto', marginTop: 20,borderRadius: 40,overflow: 'hidden'}}>
      <Button title="Sign In →" color="#048e14" /></View>

       <View style={styles.container}>
      <View style={styles.iconBox}>
        <Ionicons name="logo-facebook" size={30} />
      </View>

      <View style={styles.iconBox}>
        <Ionicons name="logo-google" size={30}  />
      </View>

      <View style={styles.iconBox}>
        <Ionicons name="logo-instagram" size={30}  />
      </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text style={{color:"#515151"}}>Don't have an account? </Text>
        <Text style={{color:"#048e14",fontWeight:"bold",}}>Sign Up</Text>
      </View>
      <Text style={{color:"#048e14",marginTop: 20,textDecorationLine:'underline'}}>Forgot your password?</Text>
    </View>

    
  );
}

const styles = StyleSheet.create({  
  container: {    flexDirection: 'row',    justifyContent: 'space-evenly',    width: '90%',    marginTop: 30,  },  
  iconBox: {    width: 60,    height: 60,    borderRadius: 10,    borderWidth: 1,    borderColor: '#ccc',    justifyContent: 'center',    alignItems: 'center',  },
});
