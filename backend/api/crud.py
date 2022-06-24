from setting import session
from user import User


session.query(User).all()

session.close()