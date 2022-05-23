from sqlalchemy import Boolean, Column, Integer, String, DateTime, Date

from .session import Base


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    first_name = Column(String)
    last_name = Column(String)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)
    is_superuser = Column(Boolean, default=False)


class Collection(Base):
    __tablename__ = "collection"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    image_url = Column(String)
    external_url = Column(String)
    price = Column(Integer)
    rate = Column(String)
    platform = Column(String)
    platform_id = Column(Integer)
    intro = Column(String)
    created_at = Column(DateTime)
    status = Column(Integer)
    update_time = Column(DateTime)
    issue_time = Column(DateTime)
    issue_num = Column(Integer)
    weight = Column(Integer)


class CollectionPrice(Base):
    __tablename__ = "collection_price"

    id = Column(Integer, primary_key=True, index=True)
    collection_id = Column(Integer)
    price = Column(Integer)
    data_time = Column(DateTime)
    update_time = Column(DateTime)
    dt = Column(Date)
