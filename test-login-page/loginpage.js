export default class App extends Component {
  render() {
    return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>

        <Text h1 style={styles.header}>SnackIndex Login</Text>
        
        {/* Text Input Fields */}
        <TextInput style={styles.textbox} 
        placeholder="Username">
        </TextInput>

        <TextInput style={styles.textbox} 
        placeholder="Password">
        </TextInput>

        {/* Forgot Password Button */}
        <View style={styles.textInline1}> 
            <TouchableOpacity>
              <Text style={styles.linkTextBoldPass}>Forgot your Password?</Text>
            </TouchableOpacity>
          </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        {/* Registration Button */}
          <View style={styles.textInline2}> 
            <TouchableOpacity onPress={this.goToRegistration}>
              <Text h3 style={styles.linkText}>Don't have an account? <Text style={styles.linkTextBold}>Register</Text></Text> 
            </TouchableOpacity>
          </View>

      </View>   
    </View> 
  );
}
  }