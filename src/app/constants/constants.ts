export class Constants {
  public static API = "http://localhost:8080/";
  public static REGEXEMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail.com$/;
  public static REGEXNAME = /^[A-Za-z]+$/;
  public static REGEXPHNO = /^\d{4}$/;
  public static REGEXPASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,18}$/;
}
