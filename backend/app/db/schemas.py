from pydantic import BaseModel
import typing as t
import datetime


class UserBase(BaseModel):
    email: str
    is_active: bool = True
    is_superuser: bool = False
    first_name: str = None
    last_name: str = None


class UserOut(UserBase):
    pass


class UserCreate(UserBase):
    password: str

    class Config:
        orm_mode = True


class UserEdit(UserBase):
    password: t.Optional[str] = None

    class Config:
        orm_mode = True


class User(UserBase):
    id: int

    class Config:
        orm_mode = True


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: str = None
    permissions: str = "user"


class Collection(BaseModel):
    id: int
    name: str
    image_url: str
    external_url: str
    price: int
    rate: str
    platform: str
    platform_id: int
    intro: str
    issue_time: datetime.datetime
    issue_num: int
    weight: int

    class Config:
        orm_mode = True


class CollectionPrice(BaseModel):
    # collection_id: int
    price: int
    dt: datetime.date

    class Config:
        orm_mode = True
