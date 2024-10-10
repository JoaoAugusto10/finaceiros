import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
  return(
    <AuthStack.Navigator>
      <AuthStack.paginas
        name="pagina1"
        component={pagina1}
        options={{
            headerShown: false
        }}
      />

      <AuthStack.paginas
        name="Pagina2"
        component={pagina2}
      />
    </AuthStack.Navigator>
  )
}

export default AuthRoutes;